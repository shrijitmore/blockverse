import zipfile, os, shutil

def extract_zip(zip_path, sub_folder, assets_root):
    with zipfile.ZipFile(zip_path) as z:
        for name in z.namelist():
            if name.endswith('/'):
                continue
            basename = os.path.basename(name.replace('\\', '/'))
            if not basename:
                continue
            normalized = name.replace('\\', '/')
            parts = normalized.split('/')
            if len(parts) > 1 and parts[0] == sub_folder:
                dest_dir = os.path.join(assets_root, sub_folder)
            else:
                dest_dir = assets_root
            os.makedirs(dest_dir, exist_ok=True)
            dest = os.path.join(dest_dir, basename)
            with z.open(name) as src, open(dest, 'wb') as dst:
                shutil.copyfileobj(src, dst)
            print('extracted:', dest)

assets = 'D:/blockverse/public/assets'
extract_zip('D:/blockverse/about-us-assets.zip', 'about', assets)
extract_zip('D:/blockverse/industry-page-assets.zip', 'industries', assets)
print('ALL DONE')
