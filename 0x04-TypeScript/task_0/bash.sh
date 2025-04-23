#!/bin/bash

# Define source and destination directories
FILES="*"

DEST_DIRs=("../task_2" 
           # "../task_3" 
            "../task_4" 
            "../task_5")

# Loop through each destination directory
for DEST in "${DEST_DIRS[@]}"; do
  mkdir -p "$DEST"         # Make sure the destination exists
  cp $FILES "$DEST"        # Copy files
  echo "Copied files to $DEST"
done
