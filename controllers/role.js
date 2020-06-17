const { mysql } = require('../qcloud');


// get方法
async function getRoleDetail(ctx) {
    try {
        const { id } = ctx.query;
        const data = await mysql('role').
            select('*').
            where({ id });
        ctx.state.code = 0;
        ctx.state.data = data[0];
    } catch (e) {
        ctx.state.code = -1;
        throw new Error(e);
    }
}

// post方法
async function addRole(ctx) {
    try {
        const { name, fullName } = ctx.request.body;
        const data = await mysql('role').insert({ name, fullName });
        ctx.state.code = 0;
        ctx.state.data = { id: data[0] };
    } catch (e) {
        ctx.state.code = -1;
        throw new Error(e);
    }
}

// put方法
async function updateRole(ctx) {
    try {
        const { id, name, fullName } = ctx.request.body;
        const data = await mysql('role').where({ id }).
            update({ name, fullName });
        ctx.state.code = 0;
        ctx.state.data = data;
    } catch (e) {
        ctx.state.code = -1;
        throw new Error(e);
    }
}

// delete方法
async function removeRole(ctx) {
    try {
        const { id } = ctx.request.body;
        const data = await mysql('role').
            where({ id }).
            del();
        ctx.state.code = 0;
        ctx.state.data = data;
    } catch (e) {
        ctx.state.code = -1;
        throw new Error(e);
    }
}

module.exports = {
    getRoleDetail,
    addRole,
    updateRole,
    removeRole
}
