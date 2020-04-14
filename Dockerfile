FROM ubuntu:16.04

MAINTAINER "jsbyman@gmail.com"

RUN apt-get update -y && \
    apt-get install -y python3-pip python-dev python3 libpq-dev net-tools
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
COPY . /app

ENTRYPOINT ["python3"]
CMD ["-u", "app.py"]
