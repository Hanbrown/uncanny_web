from flask import Flask, send_from_directory
from waitress import serve

app = Flask(__name__)

# Calculate focal length
@app.route("/focal/<num>")
def get_focal_length(num):
    return str(num)

# Seve homepage
@app.route("/")
def send_home():
    return send_from_directory("dist", "index.html")

# Serve all static files
@app.route("/<path:path>")
def send_static_file(path):
    return send_from_directory("dist", path)

print("Running app on port 8080")
serve(app, host='127.0.0.1', port=8080)