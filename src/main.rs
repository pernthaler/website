#[macro_use]
extern crate rocket;

use clap::Command;
use rocket::Config;
use rocket::http::ContentType;
use rocket::response::content::RawHtml;
use rust_embed::RustEmbed;
use std::borrow::Cow;
use std::ffi::OsStr;
use std::net::IpAddr;
use std::path::PathBuf;

#[derive(RustEmbed)]
#[folder = "build"]
struct Build;

#[get("/")]
fn index() -> Option<RawHtml<Cow<'static, [u8]>>> {
    let file = Build::get("index.html")?;
    Some(RawHtml(file.data))
}

#[get("/<path..>")]
fn build(path: PathBuf) -> Option<(ContentType, Cow<'static, [u8]>)> {
    let name = path.display().to_string();
    let file = Build::get(&name)?;
    let content = path
        .extension()
        .and_then(OsStr::to_str)
        .and_then(ContentType::from_extension)
        .unwrap_or(ContentType::Bytes);

    Some((content, file.data))
}

#[launch]
fn rocket() -> _ {
    Command::new(env!("CARGO_PKG_NAME"))
        .version(env!("CARGO_PKG_VERSION"))
        .get_matches();

    rocket::custom(Config {
        address: IpAddr::from([0, 0, 0, 0]),
        port: 8080,
        ..Default::default()
    }).mount("/", routes![index, build])
}