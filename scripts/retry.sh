#!/usr/bin/env bash
set -e

MAX_RETRY_COUNT=5

retry() {
  local result=0
  local count=1
  while [[ "${count}" -le ${MAX_RETRY_COUNT} ]]; do
    [[ "${result}" -ne 0 ]] && {
      echo -e "\\nThe command \"${*}\" failed. Retrying, ${count} of ${MAX_RETRY_COUNT}.\\n" >&2
    }
    "${@}" && { result=0 && break; } || result="${?}"
    count="$((count + 1))"
    sleep 1
  done

  [[ "${count}" -gt ${MAX_RETRY_COUNT} ]] && {
    echo -e "\\nThe command \"${*}\" failed ${MAX_RETRY_COUNT} times.\\n" >&2
  }

  return "${result}"
}

retry ${*}
