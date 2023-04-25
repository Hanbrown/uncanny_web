from flask import Flask, send_from_directory
from focus import focus

app = Flask(__name__)

# Calculate focal length
@app.route("/focus", methods=["GET"])
def get_focal_length():
    result = {"length": focus()}
    return result

# Seve homepage
@app.route("/")
def send_home():
    return send_from_directory("dist", "index.html")

# Serve all static files
@app.route("/<path:path>")
def send_static_file(path):
    return send_from_directory("dist", path)

print("Running app on port 8080")