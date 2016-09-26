OPTS=--env static

default: src/*
	docpad generate ${OPTS}

deploy:
	docpad deploy-ghpages ${OPTS}

serve:
	docpad run ${OPTS}

.PHONY: deploy serve
