from django.contrib import admin
from .models import Articles, ArticlesCategory, Documents, DocumentsCategory, News, NewsCategory, Products, ProductsCategory, Albums, Gallery, Licences

@admin.register(Articles)
class ArticlesAdmin(admin.ModelAdmin):
	list_display = ['name', 'created_at']

@admin.register(ArticlesCategory)
class ArticlesCategoryAdmin(admin.ModelAdmin):
	list_display = ['name', 'descriptor']

@admin.register(Documents)
class DocumentsAdmin(admin.ModelAdmin):
	list_display = ['name', 'descriptor', 'created_at']

@admin.register(DocumentsCategory)
class DocumentsCategoryAdmin(admin.ModelAdmin):
	list_display = ['name', 'descriptor']

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
	list_display = ['name', 'descriptor', 'created_at']

@admin.register(NewsCategory)
class NewsCategoryAdmin(admin.ModelAdmin):
	list_display = ['name', 'descriptor']

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
	list_display = ['name', 'created_at']

@admin.register(ProductsCategory)
class ProductsCategoryAdmin(admin.ModelAdmin):
	list_display = ['name', 'descriptor']

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
	list_display = ['id', 'image', 'album']

@admin.register(Albums)
class AlbumsAdmin(admin.ModelAdmin):
	list_display = ['title', 'descriptor']

@admin.register(Licences)
class LicencesAdmin(admin.ModelAdmin):
	list_display = ['title', 'descriptor', 'created_at']