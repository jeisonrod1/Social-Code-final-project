echo "python manage.py makemigrations" >> dev.sh
echo "python manage.py migrate" >> dev.sh
echo "python manage.py runserver 0:8000" >> dev.sh

echo 'python -c "import time; time.sleep(3)"' >> prod.sh
echo "python manage.py migrate" >> prod.sh
echo "python manage.py collectstatic --no-input" >> prod.sh
echo "gunicorn -w 4 -b 0.0.0.0:8000 project.wsgi:application" >> prod.sh