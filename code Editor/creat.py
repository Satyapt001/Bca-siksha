import json
import os

def generate_programs_from_directory(base_directory, base_url):
    languages = ['C', 'C++', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript']
    programs = []

    for lang in languages:
        lang_dir = os.path.join(base_directory, lang)
        if not os.path.isdir(lang_dir):
            print(f"Directory for language {lang} does not exist: {lang_dir}")
            continue
        
        print(f"Processing language directory: {lang_dir}")
        for i in range(1, 21):
            code_file = f'program_{i}.txt'
            code_path = os.path.join(lang_dir, code_file)
            if not os.path.isfile(code_path):
                print(f"File for program {i} does not exist: {code_path}")
                continue
            
            # Construct the URL to access the code file
            file_url = f"{base_url}/{lang}/{code_file}"
            program = {
                "id": (languages.index(lang) * 20) + i,
                "preferred_language": lang,
                "question": f"Question {i} for {lang}",
                "code_url": file_url,
                "tags": ["programming", lang.lower()]
            }
            programs.append(program)

    output_file = 'programs.json'
    try:
        with open(output_file, 'w') as f:
            json.dump(programs, f, indent=4)
        print(f"{output_file} has been generated successfully.")
    except Exception as e:
        print(f"Error writing to {output_file}: {e}")

# Set the path to your base directory and the base URL where files are hosted
base_dir = 'G:\WEB\Sp_t\Bca siksha\code Editor\code'
base_url = 'http://example.com/source_code'  # URL where the source code files are accessible

generate_programs_from_directory(base_dir, base_url)
