#!/usr/bin/env bash

# The name of the git directory (usually '.git') of the current repository
function git_dir {
    # $_ is currently overwitten by chruby_auto
    local dir
    dir=$(git rev-parse --git-dir) || return 1
    abs_path "$dir"
}
