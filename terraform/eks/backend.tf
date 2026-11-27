terraform {
  backend "s3" {
    bucket         = "inventory-api-tfstate-onnwjv"
    key            = "eks/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "inventory-api-terraform-locks"
  }
}
