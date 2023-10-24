const Deploy = require("ftp-deploy");
const ftpDeploy = new Deploy();

const config = {
  user: "u613160674",
  // Password optional, prompted if none given
  password: "StyvensCamille5959.",
  host: "62.72.37.186",
  port: 21,
  localRoot: __dirname,
  remoteRoot:
    "/domains/styvens-wentz.fr/public_html/projects/Transformez_une_maquette_en_site_web_avec_HTML_et_CSS",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["*", "**/*", "**/**/*", ".htaccess"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [
    ".idea/**",
    ".idea/**/*",
    "node_modules/**",
    "node_modules/**/*",
    "*.json",
    ".gitignore",
    "deploy.js",
    "deployFaceSite.js",
    "*.iml",
    "faceSite/*",
    ".git/**",
  ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
