#!/usr/bin/env bash

datetime=$(date '+%Y-%m-%d_%H-%M-%S')
declare -a suites=( \
  "sample1" \
  "sample2" \
)

arraylength=${#suites[@]};

for (( i=0; i<${arraylength}; i++ ));
do
  p=$(expr $i + 1);
  ./node_modules/.bin/intern-runner config=intern \
  functionalSuites=tests/functional/${suites[$i]} \
  proxyPort=900$p \
  proxyUrl=http://localhost:900$p/ &
done;
