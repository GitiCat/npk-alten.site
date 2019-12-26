from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)
router.register(r'articles-category', ArticlesCategoryViewSet)
router.register(r'documents', DocumentsViewSet)
router.register(r'documents-category', DocumentsCategoryViewSet)
router.register(r'news', NewsViewSet)
router.register(r'news-category', NewsCategoryViewSet)
router.register(r'albums', AlbumsViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'products', ProductsViewSet)
router.register(r'products-category', ProductsCategoryViewSet)
router.register(r'licences', LicencesViewSet)

urlpatterns = router.urls