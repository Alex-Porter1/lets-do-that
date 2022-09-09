FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files in your service's directory
# Modify these instructions to do that
COPY requirements.txt requirements.txt
COPY manage.py manage.py

# Copy all of the subdirectories in your service's directory
# Modify these instructions to do that
COPY accounts accounts
COPY accounts_rest accounts_rest
COPY poll poll
COPY tests tests

RUN pip install -r requirements.txt
CMD python manage.py migrate && gunicorn accounts_project.wsgi --bind 0.0.0.0:$PORT --log-file -