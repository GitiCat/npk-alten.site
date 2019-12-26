from rest_framework import serializers
from server_app.models import Articles, ArticlesCategory, Documents, DocumentsCategory, News, NewsCategory, Products, ProductsCategory, Albums, Gallery, Licences
from webserver import settings

class ArticlesPreviewSerializer(serializers.ModelSerializer):

	m_image = serializers.SerializerMethodField("get_m_image_url")

	def get_m_image_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.m_image)
	
	class Meta:
		model = Articles
		fields = [
			'id',
			'name',
			'title',
			'subtitle',
			'text',
			'm_image',
			'image_list',
			'category',
			'is_title_visible',
			'is_subtitle_visible',
			'is_article_enable',
			'created_at',
			'url',
		]

class ArticlesDetailSerializer(serializers.ModelSerializer):

	m_image = serializers.SerializerMethodField("get_m_image_url")

	def get_m_image_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.m_image)

	class Meta:
		model = Articles
		fields = [
			'title',
			'subtitle',
			'text',
			'm_image',
			'image_list',
			'category',
			'is_title_visible',
			'is_subtitle_visible',
			'is_article_enable',
		]

class ArticlesCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = ArticlesCategory
		fields = [
			'id',
			'name',
			'title',
			'descriptor',
		]

class DocumentsPreviewSerialize(serializers.ModelSerializer):

	uploading_files = serializers.SerializerMethodField('get_uploading_url');

	def get_uploading_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.uploading_files);

	class Meta:
		model = Documents
		fields = [
			'id',
			'name',
			'title',
			'descriptor',
			'uploading_files',
			'is_title_visible',
			'is_subtitle_visible',
			'is_descriptor_visible',
			'category_id',
			'created_at',
			'url',
		]

class DocumentsDetailSerialize(serializers.ModelSerializer):

	uploading_files = serializers.SerializerMethodField('get_uploading_url');

	def get_uploading_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.uploading_files);

	class Meta:
		model = Documents
		fields = [
			'title',
			'descriptor',
			'uploading_files',
			'is_title_visible',
			'is_subtitle_visible',
			'is_descriptor_visible',
			'category_id',
		]

class DocumentsCategorySerialize(serializers.ModelSerializer):
	class Meta:
		model = DocumentsCategory
		fields = [
			'id',
			'name',
			'descriptor',
		]

class NewsCategorySerialize(serializers.ModelSerializer):
	class Meta:
		model = NewsCategory
		fields = (
			'name',
			'descriptor'
		)

class NewsSerialize(serializers.ModelSerializer):

	category = serializers.SlugRelatedField(read_only=True, slug_field='name')
	date = serializers.DateField(format="%d.%m.%Y", required=False, read_only=True)

	bd_image = serializers.SerializerMethodField('get_bg_image_url')

	def get_bg_image_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.bd_image)

	class Meta:
		model = News
		fields = (
			'id',
			'name',
			'category',
			'title',
			'subtitle',
			'descriptor',
			'bd_image',
			'list_image',
			'logo',
			'created_at',
			'url',
			'original_url',
			'date'
		)

class GallerySerialize(serializers.ModelSerializer):
	class Meta:
		model = Gallery
		fields = (
			'id',
			'image',
			'album'
		)

class AlbumsSerialize(serializers.ModelSerializer):
	class Meta:
		model = Albums
		fields = (
			'id',
			'name',
			'bg_image',
			'title',
			'descriptor',
			'url'
		)

class ProductsPreviewSerialize(serializers.ModelSerializer):

	bg_image = serializers.SerializerMethodField('get_bg_image_url')

	def get_bg_image_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.bg_image);

	class Meta:
		model = Products
		fields = [
			'id',
			'name',
			'title',
			'subtitle',
			'descriptor',
			'specifications',
			'bg_image',
			'list_image',
			'files',
			'is_title_visible',
			'is_subtitle_visible',
			'is_docs_visible',
			'created_at',
			'url',
			'category_id'
		]

class ProductsDetailSerialize(serializers.ModelSerializer):
	class Meta:
		model = Products
		fields = [
			'category_id',
			'title',
			'subtitle',
			'descriptor',
			'specifications',
			'bg_image',
			'list_image',
			'files',
			'is_title_visible',
			'is_subtitle_visible',
			'is_docs_visible'
		]

class ProductsCategorySerialize(serializers.ModelSerializer):

	bg_image = serializers.SerializerMethodField('get_bg_image_url')

	def get_bg_image_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.bg_image)

	class Meta:
		model = ProductsCategory
		fields = [
			'id',
			'name',
			'title',
			'descriptor',
			'bg_image'
		]

class LicencesSerialize(serializers.ModelSerializer):

	image = serializers.SerializerMethodField("get_image_url")

	def get_image_url(self, obj):
		return '%s%s%s' % (settings.STATIC_URL, settings.MEDIA_URL, obj.image)

	class Meta:
		model = Licences
		fields = [
			'id',
			'name',
			'title',
			'descriptor',
			'image',
			'created_at',
			'url'
		]