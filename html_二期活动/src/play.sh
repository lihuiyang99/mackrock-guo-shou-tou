#!/bin/bash

fis3 server stop
fis3 server clean
fis3 release
fis3 server start
fis3 release -wL

