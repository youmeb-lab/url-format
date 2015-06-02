BIN := node_modules/.bin
MOCHA := $(BIN)/mocha --harmony
SRC := lib/*.js
TEST := ./test/*.js

include dependencies.mk

test:
	@$(MOCHA) $(TEST)

.PHONY: test
