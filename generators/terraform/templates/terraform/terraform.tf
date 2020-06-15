terraform {
  backend "s3" {
    bucket = "<%= customerName %>-terraform-state"
    key = "<%= projectName %>"
    region="us-west-2"
    dynamodb_table = "<%= dynamoLockTable %>"
  }
}

provider "aws" {
  region     = "us-west-2"
}