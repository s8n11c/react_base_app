FROM debian
RUN apt-get  update
RUN  apt-get install -y curl software-properties-common
RUN curl -sL https://deb.nodesource.com/setup_11.x |  bash -
RUN  apt-get install -y nodejs
CMD  npm start  /app
