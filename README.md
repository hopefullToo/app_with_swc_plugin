Calling the nextjs homepage aborts with a panic error message that refers to the wasm bytecheck.
To make sure that it is not due to my own implementation, I created this rudimentary project and configuered two of the plugins listed on https://plugins.swc.rs/versions/range/116 in next.config.ts These throw the same errors.

See also the file next-panic-23887cc5b83215bff2328b31afc50d3f.log
