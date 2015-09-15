#! /bin/bash
set -e

curl https://install.meteor.com | /bin/sh

JASMINE_BROWSER=PhantomJS

meteor --test
