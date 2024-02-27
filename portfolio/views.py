from django.shortcuts import render

def home(request):
    context = {} 
    return render(request, 'portfolio/home.html', context)

def projects(request):
    context = {'projects': projects} 
    return render(request, 'portfolio/projects.html', context)
