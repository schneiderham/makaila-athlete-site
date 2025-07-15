#!/bin/bash
# save-work.sh: Stage, commit, and push all changes in one step.

if [ -z "$1" ]; then
  read -p "Enter commit message: " msg
else
  msg="$1"
fi

git add .
git commit -m "$msg"
git push 