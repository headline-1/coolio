#!/usr/bin/env bash

yarn audit --groups dependencies
level=$?
if [[ $level -eq 0 ]]; then
  echo "No issues found. We're good to go."
elif [[ $level -le 4 ]]; then
  echo "Found issues during audit, however they're below MODERATE level. Ignoring..."
else
  echo "Found serious issues. Failing build."
  exit 1
fi
