provider "aws" {
    region = "eu-west-1"
    shared_credentials_file  = ".aws_creds"
    profile = "phisher.men"
}

variable "bucket_name" {
  default = "www4.phisher.men"
}

// output "cdn_endpoint" {
//   value = "https://${lower(aws_cloudfront_distribution.frontend.hosted_zone_id)}.cloudfront.net"
// }

output "s3_endpoint" {
  value = "http://${aws_s3_bucket.frontend.website_endpoint}"
}

resource "aws_s3_bucket" "frontend" {
    bucket = "${var.bucket_name}"
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
      "Resource": "arn:aws:s3:::${var.bucket_name}/*",
      "Principal": "*"
    }
  ]
}
EOF
    website {
        index_document = "index.html"
        error_document = "error.html"
    }

    force_destroy = true
}

// @TODO figure this out
// resource "aws_cloudfront_distribution" "frontend" {
//   enabled = true
//   price_class = "PriceClass_100" //we'll leave true geo distribution to cloudflare
//
//   default_cache_behavior {
//     allowed_methods = [ "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT" ]
//     cached_methods = ["GET", "HEAD"]
//     target_origin_id = "S3-${var.bucket_name}"
//     forwarded_values {
//       query_string = true
//       cookies {
//         forward = "none"
//       }
//     }
//
//     viewer_protocol_policy = "allow-all"
//     min_ttl = 0
//     default_ttl = 3600
//     max_ttl = 86400
//   }
//
//   origin {
//     domain_name = "${var.bucket_name}.s3.amazonaws.com"
//     origin_id = "S3-${var.bucket_name}"
//   }
//
//   retain_on_delete = "true" //distribution needs to be removed afterwards
//   viewer_certificate {
//     cloudfront_default_certificate = true
//   }
//
//   restrictions {
//     geo_restriction {
//       restriction_type = "none"
//     }
//   }
// }
