import os

os.system(
    """docker run -it \
        --mount type=bind,source=\"$(pwd)\",target=/src \
        tapis/tapis-typescript"""
    )