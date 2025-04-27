#!/bin/bash

for dir in ../task_*; do
    # Skip if it's task_0
    [ "$(basename "$dir")" = "task_0" ] && continue

    if [ -d "$dir" ]; then
        find . -maxdepth 1 -type f -exec cp -p {} "$dir/" \;
    fi
done
