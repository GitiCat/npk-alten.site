from django.db import models
from tinymce import HTMLField
from django.utils.translation import ugettext_lazy as _
import os
from django.conf import settings

#	A class describing the model for submitting site articles
class Articles(models.Model):
	category = models.ForeignKey('ArticlesCategory', on_delete=models.SET_NULL, null=True)
	name = models.CharField(max_length=255, verbose_name='Название')
	title = models.CharField(max_length=100, verbose_name='Заголовок')
	subtitle = models.CharField(max_length=255, verbose_name='Подзаголовок')
	created_at = models.DateTimeField(_('created_at'), auto_now_add=True)
	text = HTMLField(_('text'))
	m_image = models.ImageField(verbose_name='Основное изображение', blank=True)
	image_list = models.TextField(verbose_name='Список изображений на странице статьи', blank=True, null=True)
	is_title_visible = models.BooleanField(_('isTitleVisible'), default=True)
	is_subtitle_visible = models.BooleanField(_('isSubtitleVisible'), default=True)
	is_article_enable = models.BooleanField(_('isArticleEnable'), default=True)

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['created_at']
		verbose_name = 'Статья'
		verbose_name_plural = 'Статьи'
		db_table = 'articles'
		managed = True

#	A class describing the model for representing categories of articles
class ArticlesCategory(models.Model):
	name = models.CharField(max_length=100, verbose_name='Название категории')
	title = models.CharField(max_length=100, verbose_name='Заголовок категории', null=True)
	descriptor = models.TextField("Описание категории", max_length=4096)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = "Категория статьи"
		verbose_name_plural = "Категории статей"
		db_table = "articles_category"
		managed = True

class Documents(models.Model):
	name = models.CharField(max_length=100, verbose_name='Название файла')
	category = models.ForeignKey("DocumentsCategory", on_delete=models.SET_NULL, null=True, blank=True)
	title = models.CharField(max_length=100, verbose_name='Заголовок файла')
	created_at = models.DateTimeField(_("created_at"), auto_now_add=True)
	descriptor = HTMLField("Описание документа")
	uploading_files = models.FileField(upload_to='documents/', null=True)
	is_title_visible = models.BooleanField(db_column='isTitleVisible', default=True, verbose_name="Отображение загалока")
	is_subtitle_visible = models.BooleanField(db_column='isSubtitleVisible', default=True, verbose_name="Отоброжение подзаголовка")
	is_descriptor_visible = models.BooleanField(db_column='isDescriptorVisible', default=True, verbose_name="Отображения описания")
	is_document_enable = models.BooleanField(db_column='isDocumentEnable', default=True, verbose_name="Видимость документа")

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['created_at']
		verbose_name = "Документ"
		verbose_name_plural = "Документы"
		db_table = 'documents'
		managed = True


class DocumentsCategory(models.Model):
	name = models.CharField(max_length=100, verbose_name='Название категории документов')
	descriptor = models.CharField(max_length=255, blank=True, verbose_name='Описание категории документов')

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = "Категория документов"
		verbose_name_plural = "Категории документов"
		db_table = "documents_category"
		managed = True

class News(models.Model):
	name = models.CharField(max_length=255, verbose_name="Название новости")
	date = models.DateField(verbose_name='Дата события', null=True)
	category = models.ForeignKey("NewsCategory", on_delete=models.SET_NULL, null=True, blank=True, related_name='categores')
	title = models.CharField(max_length=255, verbose_name="Заголовок новости")
	subtitle = models.CharField(max_length=255, blank=True, verbose_name="Подзаголовок новости")
	created_at = models.DateTimeField(_("created_at"), auto_now_add=True)
	descriptor = HTMLField("Текст новости")
	bd_image = models.ImageField(verbose_name="Основная картинка", blank=True)
	list_image = models.ImageField(verbose_name="Список второстепенных картинок", blank=True)
	logo = models.ImageField(verbose_name="Логотип", blank=True)
	original_url = models.URLField(verbose_name="Ссылка на оригинальную статью", blank=True)

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['created_at']
		verbose_name="Новость"
		verbose_name_plural="Новости"
		db_table = 'news'
		managed = True

	def __unicode__(self):
		return self.title

class NewsCategory(models.Model):
	name = models.CharField(max_length=255, verbose_name="Название категории")
	descriptor = models.TextField("Описание категории", max_length=4096)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = "Категория новостей"
		verbose_name_plural = "Категории новостей"
		db_table = "news_category"
		managed = True


class Albums(models.Model):
	name = models.CharField(max_length=255, verbose_name="Название альбома")
	bg_image = models.ImageField(upload_to='gallery', null=True)
	title = models.CharField(max_length=255, verbose_name='Заголовок альбома')
	descriptor = HTMLField("Описание", blank=True)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name='Альбом'
		verbose_name_plural='Альбомы'
		db_table = 'albums'
		managed = True

class Gallery(models.Model):
	image = models.ImageField(upload_to='gallery')
	album = models.ForeignKey(Albums, on_delete=models.CASCADE)

	def __str__(self):
		return self.image.name

	class Meta:
		verbose_name = 'Галерея'
		verbose_name_plural = 'Галерея'
		db_table = 'gallery'
		managed = True

class Products(models.Model):
	name = models.CharField(max_length=255, verbose_name="Наименование продукта")
	title = models.CharField(max_length=255, verbose_name="Заголовок")
	subtitle = models.CharField(max_length=255, verbose_name="Подзаголовок", blank=True)
	category_id = models.ForeignKey("ProductsCategory", on_delete=models.SET_NULL, null=True)
	created_at = models.DateTimeField(_("created_at"), auto_now_add=True)
	descriptor = HTMLField("Описание")
	specifications = HTMLField("Технические характеристики")
	bg_image = models.ImageField(verbose_name="Основная картинка", blank=True, upload_to="images/")
	list_image = models.ImageField(verbose_name="Список второстепенных картинок", blank=True)
	files = models.FileField(verbose_name="Файлы", blank=True)
	is_title_visible = models.BooleanField(db_column="isTitleVisible", default=True, verbose_name="Отображение загалока")
	is_subtitle_visible = models.BooleanField(db_column="isSubtitleVisible", default=True, verbose_name="Отображение подзаголовка")
	is_docs_visible = models.BooleanField(db_column="isDocsVisible", default=True, verbose_name="Отображение блока документов")

	def __str__(self):
		return self.name

	class Meta:
		ordering = ['created_at']
		verbose_name = "Продукт"
		verbose_name_plural = "Продукция"
		db_table = "products"
		managed = True

class ProductsCategory(models.Model):
	name = models.CharField(max_length=255, verbose_name="Название категории")
	title = models.CharField(max_length=100, verbose_name="Заголовок категории", null=True)
	descriptor = HTMLField("Описание категории")
	bg_image = models.FileField(verbose_name="Картинка категории", blank=True)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = "Категория продукции"
		verbose_name_plural = "Категории продукции"
		db_table = "products_category"
		managed = True

class Licences(models.Model):
	name = models.CharField(max_length=255, verbose_name="Название лицензии")
	title = models.CharField(max_length=255, verbose_name="Заголовок лицензии")
	descriptor = HTMLField("Описание")
	image = models.ImageField(verbose_name="Основное изображение", blank=True, upload_to="images/licences/")
	created_at = models.DateTimeField(_("created_at"), auto_now_add=True)

	def _str_(self):
		return self.name
		
	class Meta:
		verbose_name="Лицензия"
		verbose_name_plural="Лицензии"
		db_table="licences"
		managed=True
