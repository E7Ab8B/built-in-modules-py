FROM sphinxdoc/sphinx:7.1.2

COPY ./docs /docs

RUN pip3 install -r /docs/requirements.txt

WORKDIR /docs

CMD make build
