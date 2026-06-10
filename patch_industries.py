content = open('d:/blockverse/src/pages/Industries.tsx', encoding='utf-8').read()

# Add image field to type
content = content.replace(
    '  gradientBg: string\n}',
    '  gradientBg: string\n  image: string\n}'
)

# Add image to each industry entry (after their gradientBg line)
replacements = [
    ("    gradientBg: 'linear-gradient(135deg,#0d1f4e 0%,#1a3a7e 60%,#153060 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#0d1f4e 0%,#1a3a7e 60%,#153060 100%)',\n    image: '/assets/industries/pharma.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#2d0a4e 0%,#4a1a7e 60%,#380d60 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#2d0a4e 0%,#4a1a7e 60%,#380d60 100%)',\n    image: '/assets/industries/bpo.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#0a2e1f 0%,#1a4e38 60%,#0d3828 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#0a2e1f 0%,#1a4e38 60%,#0d3828 100%)',\n    image: '/assets/industries/manufacturing.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#2e1a00 0%,#4e3000 60%,#3a2200 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#2e1a00 0%,#4e3000 60%,#3a2200 100%)',\n    image: '/assets/industries/realestate.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#001a2e 0%,#002e4e 60%,#00223c 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#001a2e 0%,#002e4e 60%,#00223c 100%)',\n    image: '/assets/industries/healthcare.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#1a1a00 0%,#2e2e00 60%,#242400 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#1a1a00 0%,#2e2e00 60%,#242400 100%)',\n    image: '/assets/industries/finance.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#1a002e 0%,#2e0050 60%,#240040 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#1a002e 0%,#2e0050 60%,#240040 100%)',\n    image: '/assets/industries/education.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#002e2e 0%,#004e4e 60%,#003a3a 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#002e2e 0%,#004e4e 60%,#003a3a 100%)',\n    image: '/assets/industries/logistics.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#2e0a1a 0%,#4e1a2e 60%,#3a0d22 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#2e0a1a 0%,#4e1a2e 60%,#3a0d22 100%)',\n    image: '/assets/industries/retail.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#001a2e 0%,#002e50 60%,#00243c 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#001a2e 0%,#002e50 60%,#00243c 100%)',\n    image: '/assets/industries/media.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#1a1400 0%,#2e2400 60%,#241c00 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#1a1400 0%,#2e2400 60%,#241c00 100%)',\n    image: '/assets/industries/construction.png',"),
    ("    gradientBg: 'linear-gradient(135deg,#0a0a2e 0%,#1a1a4e 60%,#121238 100%)',",
     "    gradientBg: 'linear-gradient(135deg,#0a0a2e 0%,#1a1a4e 60%,#121238 100%)',\n    image: '/assets/industries/enterprise.png',"),
]

for old, new in replacements:
    content = content.replace(old, new)

# Replace gradient placeholder with actual img
content = content.replace(
    '                  <div\n                    className="ind-intro__img-placeholder"\n                    style={{ background: ind.gradientBg }}\n                  />\n                  <div className="ind-intro__img-glow" />',
    '                  <img\n                    src={ind.image}\n                    alt={ind.tag}\n                    className="ind-intro__img"\n                  />\n                  <div className="ind-intro__img-glow" />'
)

open('d:/blockverse/src/pages/Industries.tsx', 'w', encoding='utf-8').write(content)
print('Done')
