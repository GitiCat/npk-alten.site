from django.http import HttpResponse

def index(request):
    return HttpResponse("hello world")

def history(request): 
    return HttpResponse("history")

def activity(request):
    return HttpResponse("activity")

def product(request, production_id):
    id = production_id
    cat = request.GET.get("cat", "")
    out = "<h2>Product ID: {0}</h2> <h2>Category: {1}</h2>".format(id, cat)
    return HttpResponse(out)

def products(request):
    return HttpResponse("products")

def documents(request):
    return HttpResponse("documents")

def leader(request, leader_name):
    return HttpResponse("leader")

def leadership(request):
    return HttpResponse("leadership")

def patent(request, patent_id):
    return HttpResponse("patent")

def patents(request):
    return HttpResponse("patents")

def album(request, album_name):
    return HttpResponse("company/gallery/album")

def gallery(request):
    return HttpResponse("company/gallery")

def company(request):
    return HttpResponse("company")