default: src/*
	docpad generate

deploy:
	git subtree push --prefix out origin master
