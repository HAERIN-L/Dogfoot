from flask import Flask, render_template, request, redirect, jsonify
import os
import re
import subprocess

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/images'

def get_wifi_signal_strength():
    try:
        output = subprocess.check_output(["netsh", "wlan", "show", "interfaces"],
                                         universal_newlines=True)
        match = re.search(r'\b신호\b\s+:\s+(\d+)%', output)
        if match:
            return int(match.group(1))
        else:
            return 0
    except subprocess.CalledProcessError:
        return 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file:
        filename = 'face.png'
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        return redirect('/running')
    else:
        return redirect('/')


@app.route('/running')
def running():
    return render_template('running.html')

@app.route('/get_signal', methods=['GET'])
def get_signal():
    signal_strength = get_wifi_signal_strength()
    return jsonify({'strength': signal_strength})

if __name__ == '__main__':
    app.run(debug=True)


# import os
# import re
# import subprocess
# from flask import Flask, render_template, request, redirect, jsonify

# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = 'static/images'

# def get_wifi_signal_strength():
#     try:
#         output = subprocess.check_output(["netsh", "wlan", "show", "interfaces"],
#                                          universal_newlines=True)
#         match = re.search(r'\b신호\b\s+:\s+(\d+)%', output)
#         if match:
#             return int(match.group(1))
#         else:
#             return 0
#     except subprocess.CalledProcessError:
#         return 0

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/get_signal', methods=['GET'])
# def get_signal():
#     signal_strength = get_wifi_signal_strength()
#     return jsonify({'strength': signal_strength})

# @app.route('/', methods=['POST'])
# def upload_file():
#     file = request.files['file']
#     if file:
#         filename = 'face.png'
#         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#     return redirect('/')

# if __name__ == '__main__':
#     app.run(debug=True)
