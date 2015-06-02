BIN := node_modules/.bin
MOCHA := $(BIN)/mocha --harmony
SRC := index.js
TEST := ./test/*.js

include dependencies.mk

test:
	@$(MOCHA) $(TEST)

.PHONY: test
