# -*- mode: ruby -*-
# vi: set ft=ruby :
#shell this bitch out 

$script = <<SCRIPT 

  sudo apt-get -y update
  sudo apt-get -y install build-essential libssl-dev git

  # Note the new setup script name for Node.js v0.12
  curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -

  sudo apt-get install -y nodejs

SCRIPT


VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    # Use Ubuntu 14.04 Trusty Tahr 64-bit as our operating system
    config.vm.box = "ubuntu/trusty64"
    config.vm.provision "shell", inline: $script, privileged: false
    # Configurate the virtual machine to use 2GB of RAM
    config.vm.provider :virtualbox do |vb|
      vb.customize ["modifyvm", :id, "--memory", "512"]
end
# Forward the Rails server default port to the host
config.vm.network :forwarded_port, guest: 4000, host: 4000

end