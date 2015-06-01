BIN := node_modules/mocha
MOCHA := $(BIN)/mocha --harmony
SRC := $(shell find lib/ -type f -name '*.js')
TEST := ./test/*.js

include dependencies.mk

test:
	@$(MOCHA) $(TEST)
