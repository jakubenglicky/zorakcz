init:
	npm install

assets:
	npx webpack

dev:
	php -S 0.0.0.0:8000 -t public
