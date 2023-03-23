function userHasCapability(user, capability) {
  // kullanıcının rolünü al
  let userRole = user.role;

  // rolün yeteneklerini al
  let roleCapabilities = userRole.getCapabilities();

  // istenen yeteneğin rolün yetenekleri arasında olup olmadığını kontrol et
  if (roleCapabilities.includes(capability)) {
    return true;
  } else {
    return false;
  }
}
