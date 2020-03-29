FROM ubuntu:16.04

MAINTAINER "jsbyman@gmail.com"

RUN apt-get update -y && \
    apt-get install -y python3-pip python-dev python3 libpq-dev net-tools
COPY ./requirements.txt /requirements.txt
COPY ./migrations /migrations
COPY ./migrate.py /migrate.py
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
