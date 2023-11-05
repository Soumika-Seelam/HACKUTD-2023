from flask import Flask

app = Flask(__name__)

#Members API route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/test")
def test():
    return{}

if __name__ == "__main__":
    app.run(debug = True)
