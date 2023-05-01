from flask import Flask, send_from_directory
from focus import focus

app = Flask(__name__)

# Calculate focal length
@app.route("/focus", methods=["GET"])
def get_focal_length():
    result = {"length": focus()}
    return result

@app.route("/about")
def send_about():
    return send_from_directory("src", "about.html")

@app.route("/how")
def send_how():
    return send_from_directory("src", "how_it_works.html")

# Serve homepage
@app.route("/")
def send_home():
    return send_from_directory("dist", "index.html")

# Serve image files
@app.route("/<path>.png")
def send_img(path):
    return send_from_directory("src", path +".png")

# Serve CSS files
@app.route("/<path>.css")
def send_css(path):
    return send_from_directory("src", path +".css")

# Serve all static files
@app.route("/<path:path>")
def send_static_file(path):
    return send_from_directory("dist", path)

print("Running app on port 8080")