from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import *
import json
import os

class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Articles.objects.all()

	def get_serializer_class(self):
		if self.action == 'list':
			return ArticlesPreviewSerializer
		return ArticlesDetailSerializer

	def list(self, request):
		response = super(ArticleViewSet, self).list(request)

		category_query = ArticlesCategoryViewSet.queryset;
		category_serialized = ArticlesCategorySerializer(category_query, many=True)

		formed = {}
		values_list = {}

		for category in category_serialized.data:
			formed[category["title"]] = []
			for item in response.data:
				if item["category"] == category["id"]:
					for key in item:
						values_list[key] = item[key]
					formed[category["title"]].append(values_list)
					values_list = {}

		return Response(formed)



class ArticlesCategoryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = ArticlesCategory.objects.all()

	def get_serializer_class(self):
		return ArticlesCategorySerializer

class DocumentsViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Documents.objects.all()

	def get_serializer_class(self):
		if self.action == 'list':
			return DocumentsPreviewSerialize
		return DocumentsDetailSerialize

class DocumentsCategoryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = DocumentsCategory.objects.all()

	def get_serializer_class(self):
		return DocumentsCategorySerialize

class NewsViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = News.objects.all()

	def get_serializer_class(self):
		return NewsSerialize


class NewsCategoryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = NewsCategory.objects.all()

	def get_serializer_class(self):
		return NewsCategorySerialize

class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Gallery.objects.all();

	def get_serializer_class(self):
		return GallerySerialize

class AlbumsViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Albums.objects.all()

	def list(self, request):
		response = super(AlbumsViewSet, self).list(request)

		formed = []
		values_list = {}

		for albums in response.data:
			gallery_serialize = GallerySerialize(Gallery.objects.filter(album_id=albums["id"]), many=True)
			for key in albums:
				values_list[key] = albums[key]
			values_list["gallery"] = []
			for image in gallery_serialize.data:
				values_list["gallery"].append(image["image"])
			formed.append(values_list)
			
		return Response(formed)		

	def get_serializer_class(self):
		return AlbumsSerialize


class ProductsViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Products.objects.all()

	def get_serializer_class(self):
		if self.action == 'list':
			return ProductsPreviewSerialize
		return ProductsDetailSerialize

	def list(self, request):
		response = super(ProductsViewSet, self).list(request)

		products_category = ProductsCategoryViewSet.queryset
		products_serialized = ProductsCategorySerialize(products_category, many=True)

		formed = {}
		values_list = {}

		for category in products_serialized.data:
			formed[category["name"]] = []
			for item in response.data:
				if item["category_id"] == category["id"]:
					for key in item:
						values_list[key] = item[key]
					values_list["category_name"] = category["title"]
					formed[category["name"]].append(values_list)
					values_list = {}

		return Response(formed)

class ProductsCategoryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = ProductsCategory.objects.all()

	def get_serializer_class(self):
		return ProductsCategorySerialize

class LicencesViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Licences.objects.all()

	def get_serializer_class(self):
		return LicencesSerialize