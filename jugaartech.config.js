module.exports = { 
    apps: [{ 
        name: 'jugaartech',
        script: 'npm start',
        env: {
       PORT: 3002
     }
    }], 
 
    deploy: { 
        production: { 
            key: 'id_rsa', 
            user: 'newadmin', 
            host: '138.3.240.170', 
            ref: 'origin/main', 
            repo: 'git@github.com:techriffic/horizon-ui-chakra-nextjs.git', 
            path: '/home/admin/web/jugaartech.com/nodeapp', 
            'pre-deploy-local': '', 
            'post-deploy': 'cd /home/admin/web/jugaartech.com/nodeapp && source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && npm run build && pm2 reload jugaartech.config.js --env production', 
            'pre-setup': '', 
            'ssh_options': 'ForwardAgent=yes' 
        } 
    } 
}