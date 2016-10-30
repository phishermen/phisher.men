provider "aws" {
    region = "eu-west-1"
    shared_credentials_file  = ".aws_creds"
    profile = "phisher.men"
}

resource "random_id" "dev_bucket_prefix" {
  keepers = {
    index_html_md5 = "${md5(file("dist/index.html"))}"
    index_js_md5 = "${md5(file("dist/index.js"))}"
  }

  byte_length = 8
}

#
# Development endpoint for public testing (A/B)
#
output "dev_s3_endpoint" {
  value = "http://${aws_s3_bucket.dev_frontend.website_endpoint}"
}

resource "aws_s3_bucket" "dev_frontend" {
    bucket = "dev-${random_id.dev_bucket_prefix.hex}.phisher.men"
    acl = "public-read"
    policy = <<EOF
{
  "Id": "bucket_policy_site",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_site_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::dev-${random_id.dev_bucket_prefix.hex}.phisher.men/*",
      "Principal": "*"
    }
  ]
}
EOF
    website {
        index_document = "index.html"
        error_document = "index.html"
    }

    force_destroy = true
}

resource "aws_s3_bucket_object" "index-html" {
    bucket = "${aws_s3_bucket.dev_frontend.bucket}"
    key = "index.html"
    source = "dist/index.html"
    content_type = "text/html"
    etag = "${md5(file("dist/index.html"))}"
}

resource "aws_s3_bucket_object" "index-js" {
    bucket = "${aws_s3_bucket.dev_frontend.bucket}"
    key = "index.js"
    content_type = "application/javascript"
    source = "dist/index.js"
    etag = "${md5(file("dist/index.js"))}"
}
