#!/usr/bin/env bash
# Execute this script after running ./fennek-recon.sh
# All png images found after running recon-now.sh will be placed into images/png/
# All images should then be copied to your doc-susemanager/images/png folder

mkdir -p build/images/png
find images/ -type f -name "*.png" -exec cp {} build/images/png \;
