from django.db import models
from badges.models import Badge
from answers.models import Answers


class HandlerAnswers(models.Model):
    answers = models.ManyToManyField(to=Answers, related_name="handler", blank=True)
    badges = models.ForeignKey(to=Badge, on_delete=models.PROTECT, related_name="handler_answers")
    amount = models.IntegerField(default=0)
