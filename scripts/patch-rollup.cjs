const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules', 'rollup', 'dist', 'native.js');
if (fs.existsSync(target)) {
  let content = fs.readFileSync(target, 'utf8');
  if (!content.includes('@rollup/wasm-node')) {
    content = content.replace(
      'const requireWithFriendlyError = id => {\n\ttry {\n\t\treturn require(id);\n\t} catch (error) {',
      'const requireWithFriendlyError = id => {\n\ttry {\n\t\treturn require(id);\n\t} catch (error) {\n\t\ttry {\n\t\t\treturn require(\'@rollup/wasm-node/dist/native.js\');\n\t\t} catch {}\n'
    );
    fs.writeFileSync(target, content, 'utf8');
    console.log('[Fasilitas Umrah] Patched rollup with WASM fallback for Windows security policy.');
  }
}

