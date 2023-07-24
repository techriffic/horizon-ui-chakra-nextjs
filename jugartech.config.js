module.exports = { 
    apps: [{ 
        name: 'jugartech',
        script: 'npm start',
        env: {
       PORT: 3001
     }
    }], 
 
    deploy: { 
        production: { 
            key: 'id_rsa', 
            user: 'newadmin', 
            host: '138.3.240.170', 
            ref: 'origin/main', 
            repo: 'git@github.com:techriffic/horizon-ui-chakra-nextjs.git', 
            path: '/home/admin/web/jugartech.com/nodeapp', 
            'pre-deploy-local': '', 
            'post-deploy': 'cd /home/admin/web/jugartech.com/nodeapp && source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && npm run build && pm2 reload jugartech.config.js --env production', 
            'pre-setup': '', 
            'ssh_options': 'ForwardAgent=yes' 
        } 
    } 
}