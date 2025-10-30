.SILENT:

version = $(shell cat package.json | grep version | head -1 | awk -F: '{ print $$2 }' | sed 's/[", ]//g')

dockerize:
	npm run build
	mkdir -p dist/tools
	rm -rf dist/tools/client && cp -r node_modules/client/ dist/tools/client
	docker rmi -f www.roo7690:$(version) || true
	docker build -t www.roo7690:$(version) .
	rm -rf dist/tools

push:
	docker save -o dist/www.roo7690.image-$(version).tar www.roo7690:$(version)
	rsync -avz dist/www.roo7690.image-$(version).tar vps:./www
	rm -rf dist/www.roo7690.image-$(version).tar
	ssh vps "docker load -i www/www.roo7690.image-$(version).tar && docker image prune -f"

deploy:
	ssh vps "docker stop www.leroo.io; docker rm www.leroo.io; docker run -d --name www.leroo.io -p 7714:7714 www.roo7690:$(version)"