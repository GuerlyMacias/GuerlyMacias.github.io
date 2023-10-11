from django.urls import path,include
from . import views


urlpatterns = [
    path('',views.index,name= "index"),
    path('login', views.view_login, name="login"),
    path('logout',views.view_logout,name= "logout"),
    path('register',views.view_register,name="register"),
    path('saver',views.saver,name="saver"),
    path('deregister',views.deregister,name="deregister"),
    path('superus', views.superus, name="superus"),
    path('profile',views.profile, name="profile"),
    path('profilephoto/<str:code>',views.profilephoto, name="profilephoto"),
    path('entrylessons',views.entrylessons,name="entrylessons"),
    path('lessons',views.lessons,name="lessons"),
    path('seelesson/<int:code>',views.seelessons,name="seelessons"),
    path('aproval/<int:code>/<str:userr>',views.aproval,name="aproval"),
    path('pdfproof/<int:code>',views.pdfproof,name="pdfproof"),
    path('deletelessons',views.deletelessons,name="deletelessons"),
    path('teste/<str:code>',views.teste,name="teste"),
    path('choosetest',views.choosetest,name="choosetest"),
    path('teste/getExam/<int:code>',views.getExam,name="getExam"),
    path('entryExam',views.entryExam,name="entryExam"),
    path('teste/goexam/<str:code>', views.goexam, name="goexam"),
    path('teste/check_answer/<str:answer>/<int:pk>',views.check_answer,name="check_answer"), 
    path('teste/positive/<int:quantity>/<int:lessonx>',views.positive,name="positive"),
    path('teste/negative/<int:quantity>',views.negative,name="negative"),
    path('why',views.why,name="why"),
    path('passchange',views.passchange,name="passchange"), 
    path('consultas',views.consultas,name="consultas"),
    path('liker/<int:code>',views.liker,name="liker"),
    path('lessonsJS',views.lessonsJS,name="lessonsJS"),
    path('testJS',views.testJS,name='testJS'),
    path('userJS',views.userJS,name="userJS"),
    path('tipsJS',views.tipsJS,name="tipsJS"),
    path('reacter/<int:code>',views.reacter,name="reacter"),
    path('quantyAprov/<str:userX>',views.quantyAprov,name="quantyAprov"),
    path('testingStudent/<str:userP>',views.testingStudent,name="testingStudent"),
    path('deleting/<str:dicas>',views.deleting,name="deleting"),
    path('mywhy',views.mywhy,name="mywhy"),

]
